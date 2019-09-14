enum TokenType {
    Application,
    Anonymous,
    Registered,
}

export const isUserRequest = (tokenType: any) =>
    tokenType !== TokenType.Application;
