from aws_cdk import (
    Stack,
    Duration,
    CfnOutput,
    aws_iam as iam,
)
from aws_cdk.aws_lambda import Runtime
from aws_cdk.aws_lambda_python_alpha import PythonFunction
from aws_cdk.aws_apigatewayv2_alpha import (
    HttpApi,
    CorsPreflightOptions,
    CorsHttpMethod,
    HttpMethod,
)
from aws_cdk.aws_apigatewayv2_integrations_alpha import HttpLambdaIntegration
from constructs import Construct
import os

class InfraStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # ── Contact Form Lambda ──
        contact_fn = PythonFunction(
            self, "ContactFormFunction",
            entry=os.path.join(os.getcwd(), "../backend/contact_form"),
            runtime=Runtime.PYTHON_3_10,
            index="handler.py",
            handler="handler",
            environment={
                "SES_SENDER":    "bwang0502@gmail.com",
                "SES_RECIPIENT": "bwang0502@gmail.com",
            },
            timeout=Duration.seconds(10),
        )
        contact_fn.add_to_role_policy(
            iam.PolicyStatement(
                actions=["ses:SendEmail"],
                resources=["*"],
            )
        )

        # ── Projects API Lambda ──
        projects_fn = PythonFunction(
            self, "ProjectsFunction",
            entry=os.path.join(os.getcwd(), "../backend/projects_api"),
            runtime=Runtime.PYTHON_3_10,
            index="handler.py",
            handler="handler",
        )

        # ── HTTP API with CORS ──
        http_api = HttpApi(
            self, "ContactApi",
            api_name="PortfolioContactApi",
            cors_preflight=CorsPreflightOptions(
                allow_headers=["Content-Type"],
                allow_methods=[CorsHttpMethod.POST],
                allow_origins=["http://localhost:3000"],
                max_age=Duration.days(1),
            ),
        )

        # Routes
        http_api.add_routes(
            path="/api/contact",
            methods=[HttpMethod.POST],
            integration=HttpLambdaIntegration("ContactIntegration", handler=contact_fn),
        )
        http_api.add_routes(
            path="/api/projects",
            methods=[HttpMethod.GET],
            integration=HttpLambdaIntegration("ProjectsIntegration", handler=projects_fn),
        )

        # ── Outputs ──
        base = http_api.url.rstrip("/")  # remove trailing slash if present

        CfnOutput(
            self, "ContactEndpoint",
            value=f"{base}/api/contact",
            description="URL for contact form submissions",
        )
        CfnOutput(
            self, "ProjectsEndpoint",
            value=f"{base}/api/projects",
            description="URL for fetching project data",
        )

