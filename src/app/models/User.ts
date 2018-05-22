export interface User {
    // can make  optional by adding a ? to the property
    firstName: string,
    lastName: string,
    email: string,
    isActive?: boolean,
    registered?: any,
    hide?: boolean
}