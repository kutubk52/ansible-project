pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/kutubk52/ansible-project.git'
            }
        }

        stage('Run Ansible') {
            steps {
                sh '''
                cd ansible-project
                ansible-playbook -i inventory/hosts.ini playbooks/site.yml
                '''
            }
        }
    }
}
