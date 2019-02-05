import { Component, OnInit } from '@angular/core';
import {GoalService} from '../goals/goal.service'
import {Goal} from '../goal';
import {Goals} from '../goals';
import {AlertsService} from '../alert-service/alerts.service';

import {HttpClient} from '@angular/common/http';
import {Quote} from '../quote-class/quote';
import { User } from '../user-class/user';


import { QuoteRequestService } from '../quote-http/quote-request.service';
import { GithubRequestService } from '../github-http/github-request.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  // providers:[GoalService,QuoteRequestService, GithubRequestService],
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  

  userName = "";
 
  user:User

  constructor(private http:HttpClient) {
    this.user=new User("",0, 0, 0, "", "");
  }
  
 //goals = Goals;
// addNewGoal(goal){
//   let goalLength = this.goals.length;
//   goal.id=goalLength+1;
//   goal.completeDate = new Date(goal.completeDate)
//   this.goals.push(goal)

// }

// deleteGoal(isComplete,index){
//   if (isComplete){

//       let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

//       if(toDelete){
//           this.goals.splice(index,1)
//           this.alertService.alertMe("Goal has been deleted")
//       }

//   }
// }

// goals:Goal[];
// alertService:AlertsService;

// constructor(goalService:GoalService,alertService:AlertsService,private quoteService:QuoteRequestService, private githubService:GithubRequestService) {
//   this.goals = goalService.getGoals();
//   this.alertService = alertService;
//    }


userRequest() {

  interface ApiResponse{
      name:string;
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      repos_url:string


  }
  // this.http.get<ApiResponse>( `https://api.github.com/users/${this.userName}?access_token=${environment.acces_token}`).subscribe(data=>{
  //     this.user= new User(data.name,data.public_repos)
  // })


  let promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(`https://api.github.com/users/${this.userName}?access_token=${environment.acces_token}`).toPromise().then(response=>{
        
        this.user.name=response.name
        this.user.public_repos=response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.avatar_url = response.avatar_url
        this.user.repos_url = response.repos_url

        resolve()
    },
    error=>{
            this.user.name="rogeruwayezu"
            this.user.public_repos=61
            this.user.followers = 0
            this.user.following = 0
            this.user.avatar_url="https://avatars1.githubusercontent.com/u/25030544?v=4"
            this.user.repos_url = "https://api.github.com/users/rogeruwayezu/repos"
            reject(error)
        }
    )
})

return promise
}

ngOnInit() {}
 quote:Quote;

  //  ngOnInit() {

  //   interface ApiResponse{
  //       quote:string;
  //       author:string
  //   }
  //   this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
  //      this.quote= new Quote(data.quote,data.author)
  //      console.log(this.quote.quote);
  //   })
  // }

  // user:User;


}
