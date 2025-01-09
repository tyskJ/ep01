#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkAppStack } from "../lib/stack/cdk-app-stack";
import { devParameter } from "../parameter";

const app = new cdk.App();
const stack = new CdkAppStack(app, "CdkAppStack", devParameter);

cdk.Tags.of(stack).add("app", devParameter.AppName);
