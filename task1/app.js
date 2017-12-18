angular.module('App', [])
    .controller('AppController', function() {
        let $ctrl = this;

        $ctrl.isShowList = true;
        $ctrl.users = [
            { name: 'Denise Howell', phoneNumber: '(128) 210-3856' },
            { name: 'Lawrence Hamilton', phoneNumber: '(223) 885-8007' },
            { name: 'Mia Hart', phoneNumber: '(838) 618-3323' },
            { name: 'Theresa Lynch', phoneNumber: '(718) 672-2710' },
            { name: 'Annie Reid', phoneNumber: '(842) 748-3978' },
            { name: 'Jonathan Fletcher', phoneNumber: '(745) 622-5449' },
            { name: 'Bill Anderson', phoneNumber: '(298) 916-3073' },
            { name: 'Andrea Hawkins', phoneNumber: '(737) 433-5496' },
            { name: 'Cameron Coleman', phoneNumber: '(930) 873-0347' },
            { name: 'Antonio Ross', phoneNumber: '(262) 638-5630' },
            { name: 'Bob Bowman', phoneNumber: '(405) 951-0149' },
            { name: 'Jared Warren', phoneNumber: '(445) 609-9943' },
            { name: 'Allen Parker', phoneNumber: '(848) 778-9626' },
            { name: 'Ray Jennings', phoneNumber: '(160) 711-4649' },
        ];
    });
