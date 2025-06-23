🧠 Main Function: greetUser(name, callback)

          |
          | ---> Executes: console.log("Hi Rajat")
          |
          | ---> Calls the callback function
                            |
                            v
             🧠 Callback Function: sayBye()
                            |
                            v
                   console.log("Goodbye!")



Real-life Analogy (Visual Style)

You: “I want a burger”  --->  🍔 Restaurant: “Okay, we’ll prepare it”
                                      |
                                      | (Time passes ⏱)
                                      v
                   🍔 Restaurant: “Your burger is ready!” ---> 📞 Calls You


👉 You gave them your phone number (callback function), they used it later.