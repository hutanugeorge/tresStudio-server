
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
   postSignUp = '/signup',
   postResetPasswordEmail = '/resetPasswordEmail',
   postResetPassword = '/resetPassword'
}

export enum Errors {
   noEmailFound = 'A user with this email couldn\'t be found',
   wrongPassword = 'Wrong password',
   emailExists = 'This email already exists',
   wrongDate = 'Wrong date',
   employeeDoesntExist = 'Employee doesn\'t exist',
   passwordDoesntMatch = 'Passwords does not match',
   error10MinutesPassword = "You have to wait 10 minutes after last password change",

}

export enum SuccessMessages {
   signup = 'User Created',
   fetchEmployees = 'Employees fetched',
   appointmentCreated = 'your appointment has been created',
   resetPassword = 'A mail has been send to your email address.',
   passwordUpdated = "Password updated successfully"
}

export enum UserRoles {
   customer = 'customer'
}