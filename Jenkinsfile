node {
    def git = checkout scm
    def COMMIT = "${git.GIT_COMMIT}"
    def BRANCH = "${git.GIT_BRANCH}"

    def IS_MASTER = "${BRANCH}" == "master"
    def IS_STAGING = "${BRANCH}" == "staging"

    def nightlyApp

    stage('Build nightly') {
        def tag = IS_STAGING ? "nightly" : "nightly-${git.GIT_COMMIT}"
        nightlyApp = docker.build("shiro/home-fe:${tag}", "--rm -f docker/fe/Dockerfile .")
    }

    try {
        stage('Test nightly') {
            nightlyApp.inside {
                sh ''' 
                   ln -s /opt/app/node_modules .
                   #yarn lint:report || true
                   #yarn test:report
                   rm node_modules
                   '''
            }
        }
    } finally {
        #cobertura coberturaReportFile: 'report/cobertura/*.xml'
        #junit 'report/junit/*.xml'
        #checkstyle pattern: 'report/checkstyle/*.xml'

        if (!IS_STAGING && !IS_MASTER) { // only keep master and staging builds
            echo 'Removing docker image'
            sh "docker rmi ${nightlyApp.id} 2>/dev/null"
        }
    }


    if (IS_STAGING) {
        def stagingApp

        stage('Build staging') {
            stagingApp = docker.build("shiro/home-fe:staging", "--rm -f docker/fe/Dockerfile.prod .")
        }
    }

    if (IS_MASTER) {
        def productionApp

        stage('Build production') {
            productionApp = docker.build("shiro/home-fe:stable", "--rm -f docker/fe/Dockerfile.prod .")
        }
    }
}
