import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_IQYwWPwjw",
  ClientId: "4duqbvk8skova44qfurqdh29et"
};

export default new CognitoUserPool(poolData);
