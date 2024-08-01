function skillsMembers() {
    let members = [
        { name: 'John', skills: ['JavaScript', 'React'] },
        { name: 'Jane', skills: ['JavaScript', 'Angular'] }
    ];

    let result = members.map(member => member.skills).reduce((a, b) => a.concat(b));
    console.log(result); // ['JavaScript', 'React', 'JavaScript', 'Angular']
}