function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'CSS', 'HTML'],
        showName: function () {
            console.log(this.name);
        },
        showSkills: function () {
            this.skills.forEach(function (skill) {
                console.log(skill);
            });
        },
        addSkill: function (skill) {
            this.skills.push(skill);
        }
    };

    member.showName(); // John
    member.showSkills(); // JavaScript CSS HTML
    member.addSkill('React');
    member.showSkills(); // JavaScript CSS HTML React
}