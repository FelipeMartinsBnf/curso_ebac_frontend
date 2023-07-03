$(document).ready(function(){

    const url = "https://api.github.com/users/FelipeMartinsBnf";

    fetch(url)
        .then(function(resp){
            return resp.json();
        })
        .then(function(json){

            $('.profile-avatar').attr('src', json.avatar_url);
            $('.profile-name').text(json.name);
            $('.profile-username').text(json.login);
            $('#repositorios').text(json.public_repos);
            $('#seguidores').text(json.followers);
            $('#seguindo').text(json.following);
            $('.profile-link').attr('href', json.html_url)

        })
})