 angular.module('users')
         .service('userService', ['$q', UserService]);

         
function UserService($q) {
	var users = [
	{
		name: 'Kaka Kaka',
		avatar: 'svg-1',
		content: 'I love Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi veniam magnam praesentium recusandae saepe rem voluptatibus quasi sint quibusdam.'
	},{
		name: 'Krasota Masota',
		avatar: 'svg-2',
		content: 'I love Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi veniam magnam praesentium recusandae saepe rem voluptatibus quasi sint quibusdam.'
	},{
		name: 'Tuka Bruka',
		avatar: 'svg-3',
		content: 'I love Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi veniam magnam praesentium recusandae saepe rem voluptatibus quasi sint quibusdam.'
	},{
		name: 'Toto Motto',
		avatar: 'svg-4',
		content: 'I love Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi veniam magnam praesentium recusandae saepe rem voluptatibus quasi sint quibusdam.'
	},{
		name: 'Kaka Kaka',
		avatar: 'svg-1',
		content: 'I love Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi veniam magnam praesentium recusandae saepe rem voluptatibus quasi sint quibusdam.'
	}

];
 return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };

}