export default function (plop) {
  plop.setGenerator('controller', {
    description: 'plop generating controller..',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller name please'
      },
      {
        type: 'input',
        name: 'is_create_route',
        message: 'Fill (yes) to create route, and other to not create route'
      }
    ],
    actions: function(data) {
      let actions = []
      actions.push({
        type: 'add',
        path: 'src/controller/{{lowerCase name}}.js',
        templateFile: 'plop_templates/controller.hbs'
      })
      actions.push({
        type: 'add',
        path: 'test/controller/{{lowerCase name}}.test.js',
        templateFile: 'plop_templates/controller.test.hbs'
      })

      if(data.is_create_route == "yes") {
        actions.push({
          type: 'add',
          path: 'src/router/{{lowerCase name}}.js',
          templateFile: 'plop_templates/router.hbs'
        })
      }

      return actions
    }
  })
};