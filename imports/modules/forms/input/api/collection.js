export default [
    {
      title: 'Required',
      description: 'Input text with required option',
      js: '  field: [{\r\n    type: \'input\',\r\n    key: \'required\',\r\n    templateOptions: {\r\n      theme: \'meteor\',\r\n      type: \'text\',\r\n      label: \'Required field\',\r\n      placeholder: \'Enter required field\',\r\n      required: true\r\n    }\r\n  }]\r\n',
      field: [{
        type: 'input',
        key: 'required',
        templateOptions: {
          theme: 'meteor',
          type: 'text',
          label: 'Required field',
          placeholder: 'Enter required field',
          required: true
        }
      }]
    },
    {
      title: 'Required custom validation',
      description: 'Input text required with custom validation',
      js: '  field: [{\r\n    type: \'input\',\r\n    key: \'required\',\r\n    templateOptions: {\r\n      theme: \'meteor\',\r\n      type: \'text\',\r\n      label: \'This field\',\r\n      placeholder: \'Enter required field\',\r\n      required: true\r\n    },\r\n    validation: {\r\n      messages: {\r\n        required: \'to.label + \" is very required\"\'\r\n      }\r\n    }\r\n  }]\r\n',
      field: [{
        type: 'input',
        key: 'requiredcustom',
        templateOptions: {
          theme: 'meteor',
          type: 'text',
          label: 'This field',
          placeholder: 'Enter required field',
          required: true
        },
        validation: {
          messages: {
            required: 'to.label + " is very required"'
          }
        }
      }]
    },
    {
      title: 'Minimum length',
      description: 'Input text field with minimum length',
      js: '  field: [{\r\n    type: \'input\',\r\n    key: \'minlength\',\r\n    templateOptions: {\r\n      theme: \'meteor\',\r\n      type: \'text\',\r\n      label: \'Minimum length field\',\r\n      placeholder: \'Minimum length field\',\r\n      minlength: 5,\r\n    }\r\n  }]\r\n',
      field: [{
        type: 'input',
        key: 'minlength',
        templateOptions: {
          theme: 'meteor',
          type: 'text',
          label: 'Minimum length field',
          placeholder: 'Minimum length field',
          minlength: 5,
        }
      }]
    },
    {
      title: 'Maxmium length',
      description: 'Input text field with maximum length',
      js: '  field: [{\r\n    type: \'input\',\r\n    key: \'maxlength\',\r\n    templateOptions: {\r\n      theme: \'meteor\',\r\n      type: \'text\',\r\n      label: \'Maximum length field\',\r\n      placeholder: \'Maximum length field\',\r\n      maxlength: 15\r\n    }\r\n  }]\r\n',
      field: [{
        type: 'input',
        key: 'maxlength',
        templateOptions: {
          theme: 'meteor',
          type: 'text',
          label: 'Maximum length field',
          placeholder: 'Maximum length field',
          maxlength: 15
        }
      }]
    },
    {
      title: 'Maximum length mdMaxlength',
      description: 'Input text field with maximum counted length',
      js: '  field: [{\r\n    type: \'input\',\r\n    key: \'mdMaxlength\',\r\n    templateOptions: {\r\n      theme: \'meteor\',\r\n      type: \'text\',\r\n      label: \'Maximum length field\',\r\n      placeholder: \'Maximum length field\',\r\n      maxlength: 15,\r\n      mdMaxlength: 15\r\n    }\r\n  }]\r\n',
      field: [{
        type: 'input',
        key: 'mdMaxlength',
        templateOptions: {
          theme: 'meteor',
          type: 'text',
          label: 'Maximum length field',
          placeholder: 'Maximum length field',
          maxlength: 15,
          mdMaxlength: 15
        }
      }]
    },
    {
      title: 'Maximum and minimum length with mdMaxLength',
      description: 'Input text field with maximum and minimum counted length',
      js: '  field: [{\r\n    type: \'input\',\r\n    key: \'mdMaxlength\',\r\n    templateOptions: {\r\n      theme: \'meteor\',\r\n      type: \'text\',\r\n      label: \'Maximum and minimum length field\',\r\n      placeholder: \'Maximum and minimum length field\',\r\n      maxlength: 15,\r\n      minlength: 10,\r\n      mdMaxLength: 15\r\n    }\r\n  }]\r\n',
      field: [{
        type: 'input',
        key: 'mdMaxlengthminlength',
        templateOptions: {
          theme: 'meteor',
          type: 'text',
          label: 'Maximum and minimum length field',
          placeholder: 'Maximum and minimum length field',
          maxlength: 15,
          minlength: 10,
          mdMaxLength: 15
        }
      }]
    },
    {
      title: 'Disabled',
      description: 'Input text field disabled',
      js: '  field: [{\r\n    type: \'input\',\r\n    key: \'disabled\',\r\n    templateOptions: {\r\n      theme: \'meteor\',\r\n      type: \'text\',\r\n      label: \'Input is disabled\',\r\n      placeholder: \'Input is disabled\',\r\n      disabled: true\r\n    }\r\n  }]\r\n',
      field: [{
        type: 'input',
        key: 'disabled',
        templateOptions: {
          theme: 'meteor',
          type: 'text',
          label: 'Input is disabled',
          placeholder: 'Input is disabled',
          disabled: true
        }
      }]
    },
    {
      title: 'Email',
      description: 'Input text field type email',
      js: '  field: [{\r\n    type: \'input\',\r\n    key: \'email\',\r\n    templateOptions: {\r\n      theme: \'meteor\',\r\n      type: \'email\',\r\n      label: \'Email address\',\r\n      placeholder: \'Enter your email address\',\r\n      pattern: \'\/^.+@.+\\..+$\/\'\r\n    },\r\n    validation: {\r\n      messages: {\r\n        pattern: \'to.label + \" is not correct\"\'\r\n      }\r\n    }\r\n  }]\r\n',
      field: [{
        type: 'input',
        key: 'email',
        templateOptions: {
          theme: 'meteor',
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter your email address',
          pattern: '/^.+@.+\..+$/'
        },
        validation: {
          messages: {
            pattern: 'to.label + " pattern " + to.pattern + " is not correct"'
          }
        }
      }]
    },
    {
      title: 'Number',
      description: 'Input text field with minimu, maximum value on defined step',
      js: '  field: [{\r\n    type: \'input\',\r\n    key: \'number\',\r\n    defaultValue: 825,\r\n    templateOptions: {\r\n      theme: \'meteor\',\r\n      type: \'number\',\r\n      label: \'Number with minimum 800 and maximum 900 with step 5\',\r\n      min: 800,\r\n      max: 900,\r\n      step: 5\r\n    }\r\n  }]\r\n',
      field: [{
        type: 'input',
        key: 'number',
        defaultValue: 825,
        templateOptions: {
          theme: 'meteor',
          type: 'number',
          label: 'Number with minimum 800 and maximum 900 with step 5',
          min: 800,
          max: 900,
          step: 5
        }
      }]
    }
  ]
