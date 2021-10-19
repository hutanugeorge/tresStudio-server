import bcrypt from "bcrypt"


type BcryptComparePasswords = (pass1: string, pass2: string) => Promise<boolean>
type BcryptGeneratePassword = (password: string) => Promise<string>

export const bcryptComparePasswords: BcryptComparePasswords = (pass1: string, pass2: string): Promise<boolean> =>
   bcrypt.compare(pass1, pass2)


export const bcryptGeneratePassword: BcryptGeneratePassword = (password: string): Promise<string> =>
   bcrypt.hash(password, 12)


