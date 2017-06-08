'use strict'

angular.module('wildNoteApp')

    .component('home', {
        templateUrl: '/app/components/home/home.html',
        controller: Home
    })

function Home(Users, Notes) {
    const ce = this

    Users.get().$promise.then(function (data) {
        if (data && data.users && typeof data.users === 'object' && data.users[0]) {
            ce.users = data.users;
        } else {
            throw 'Bad response from server'
        }
    });

    this.test = "ggfsgfdsgfdsgfsgf"
}
