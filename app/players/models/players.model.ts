module App.Players.Models{
    export interface PlayersModel{
        players:Player[];
        like(player:Player):void;
        dislike(player:Player):void;
    }

    export interface Player{
        name: string
        age: number
        gender:string
        likes:number
        dislikes:number
    }
}