export class GlobalConstants{

  public static baseUrl = "https://127.0.0.1:8000/"
  public static token = localStorage.getItem("bearerToken")

  public static isLoggedIn(){
    return localStorage.getItem("bearerToken") != null
  }
}
