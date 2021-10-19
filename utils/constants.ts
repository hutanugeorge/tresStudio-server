export enum landingPageRoutes {
   getPostLandingInfo = '/landing'
}

export enum featureSectionRoutes {
   getPostFeatures = '/features'
}

export enum reviewSectionRoutes {
   getPostReviews = '/reviews'
}

export enum userDashboardRoutes {
   getPostPromotionsRoute = '/promotions',
   getPostRewardsRoute = '/rewards',
   getPostAppointmentsRoute = '/appointments',
   getPostUserInfoRoute = '/user',
   getEmployeesRoute = '/employees'
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
   emailExists = 'This email already exists'
}

export enum SuccessMessages {
   signup = 'User Created',
   fetchEmployees = 'Employees fetched'
}

export enum UserRoles {
   customer = 'customer'
}