pipeline {
 agent any
 stages {
    stage("build") {
         steps {
            bat 'docker build -t automation:1.0.0 .'
            
         }
    }
     stage("test") {
         steps {
             bat 'docker-compose ran automation'
         }
     }
 }
}
