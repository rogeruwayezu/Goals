import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user-class/user'

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

//   user:User
//   constructor(private http:HttpClient) { 
//     this.user=new User("", 0);
//   }

//   userRequest(){
//     interface ApiResponse{
//       name:string;
//       public_repos:number

//     }

//     let promise =new Promise((resolve,reject)=>{
//       this.http.get<ApiResponse>("https://api.github.com/users/kasambuli").toPromise().then(response=>{
          
//           this.user.name=response.name
//           this.user.public_repos=response.public_repos

//           resolve()
//       },
//       error=>{
//               this.user.name="rogeruwayezu"
//               this.user.public_repos=61
//               reject(error)
//           }
//       )
//   })

//   return promise
// }



}
