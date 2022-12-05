export class User {
    constructor(
     public user_id: string,
     public first_name: string,
     public last_name: string,
     public gender:string,
     public user_type:string,
     public user_email: string,
     public password: string
    //  public confirm_pass: string
     
  
    ){}
  
  }
  export class login {
    constructor(
     public user_email: string,
     public password: string,
  
    ){}
  
  }