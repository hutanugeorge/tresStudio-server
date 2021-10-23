
export enum presentationPageRoutes {
   getPostReviews = '/reviews',
   getPostFeatures = '/features',
   getPostLandingInfo = '/landing',
   getEmployeesRoute = '/employees',
   getPostAppointmentsRoute = '/appointments',
}

export enum userDashboardRoutes {
   getPostPromotionsRoute = '/promotions',
   getPostRewardsRoute = '/rewards',
   getPostUserInfoRoute = '/user',
}

export enum adminDashboardRoutes {
   postEmployee = '/adminDashboard/employee'
}

export enum login {
   postLogin = '/login',
   postSignUp = '/signup'
}

export enum Errors {
   noEmailFound = 'A user with this email couldn\'t be found',
   wrongPassword = 'Wrong password',
   emailExists = 'This email already exists',
   wrongDate = 'Wrong date',
   employeeDoesntExist = 'Employee doesn\'t exist'
}

export enum SuccessMessages {
   signup = 'User Created',
   fetchEmployees = 'Employees fetched',
   appointmentCreated = 'your appointment has been created'
}

export enum UserRoles {
   customer = 'customer'
}