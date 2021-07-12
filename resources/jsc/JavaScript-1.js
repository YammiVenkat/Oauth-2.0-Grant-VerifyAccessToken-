var res= JSON.parse(response.content);
  
  var minimizedResponse = {
   token_type : res.token_type,
   issued_at : res.issued_at,
   access_token: res.access_token,
   scope : res.scope,
   expires_in : res.expires_in
  }
response.content = JSON.stringify(minimizedResponse);