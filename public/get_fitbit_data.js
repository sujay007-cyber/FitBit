const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhQUTkiLCJzdWIiOiJCNlRSTUgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcm94eSBybnV0IHJwcm8gcnNsZSByYWN0IHJyZXMgcmxvYyByd2VpIHJociBydGVtIiwiZXhwIjoxNjY0NTA4MjU5LCJpYXQiOjE2NjM5NDQ5ODJ9.YKUpAh5Cd4mFK4kZ3ACqs6k-jJeBT1FUTSAY9MEuAAU"

fetch('https://api.fitbit.com/1/user/-/profile.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json()) 
.then(json => console.log(json)); 