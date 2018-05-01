export interface User {
    // can make  optional by adding a ? to the property
    firstName: string,
    lastName: string,
    age?: number,
    address?: {
        street?: string,
        city?: string,
        state?: string
        },
        isActive?: boolean,
        registered?: any,
        hide?: boolean
}