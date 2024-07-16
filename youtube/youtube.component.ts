import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../../services/youtube.service";
import { log } from "console";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MealsService } from "../../../services/meals.service";

@Component({
  selector: "app-youtube",
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: "./youtube.component.html",
  providers: [HttpClient],

  styleUrl: "./youtube.component.css",
})
export class YoutubeComponent {
  statistics: any;
  snippet: any;
  defaults: any;
  limits: any;
  contentDatils: any;
  statisticss: any;
  contentDatilss: any;
value: any;
items:any=[]

  router: any;
data: any;
  mealss: any;
  constructor(private youtubeService: YoutubeService,private mealsService:MealsService)  {}
  ngOnInit() {
    this.searchVideos();
    this.meals();
  }

  searchVideos() {
    this.youtubeService.youtubeChannel().then((res: any) => {
      console.log(res);
      console.log(res.data.info.brandingSettings.channel.title);
      this.statistics=res.data.info.statistics
      console.log(this.statistics)
      this.snippet=res.data.info.snippet
      console.log(this.snippet)

     this.defaults=res.data.info.snippet.thumbnails.default.url
      
    });
  }

  handleTitleClick(id: string): void {
    console.log('Item ID:', id);
    this.router.navigate(['/details', id]);
  }

  newyoutubeVideos(query:string){
let page = 1; 
let limit = 10;
let sortBy = 'mostLiked';

    
    this.youtubeService.youtubeVideos(query).then((res: any) =>{
      console.log(res);
      console.log(res.data);
      this.items= res.data.data
      console.log(this.items);
      
      // res.data.data[0].items.snippet.title;

    //  this.statisticss=res.data.data[0].items.statistics
    //  console.log(this.statistics);


    //  this.contentDatilss=res.data.data[0].items.contentDetails

      

    })
  }

  somefn(){
    console.log(this.value);

    this.newyoutubeVideos(this.value);
    
    
  }

  handleClick(id:string){


    const url = `https://youtu.be/${id}`;
    window.open(url, '_blank');

  }

  meals(){
    this.mealsService.newMeals().then((res:any)=>{
      console.log(res);
      this.mealss=res.data.data[0]
    })
  }
  
}
