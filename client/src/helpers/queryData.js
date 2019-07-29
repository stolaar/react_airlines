export const loginData = data => {
  const { email, password } = data;
  return {
    query: `
          query {
            login(email: "${email}", password: "${password}") {
              data {
                success
                token
              }
              errors {
                email
                password
              }
            }
          }
          `
  };
};

export const registerData = data => {
  const { name, email, password, password2 } = data;
  return {
    query: `
    mutation {
      register(UserInput: {name: "${name}",email: "${email}", password: "${password}", password2: "${password2}"}) {
        success
        errors {
          name
          email
          password
          password2
        }
      }
    }
    `
  };
};
