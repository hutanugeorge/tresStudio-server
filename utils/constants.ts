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
   getPostPromotions = '/promotions',
   getPostRewards = '/rewards',
   getPostAppointments = '/appointments',
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
   signup = 'User Created'
}

export enum UserRoles {
   customer = 'customer'
}