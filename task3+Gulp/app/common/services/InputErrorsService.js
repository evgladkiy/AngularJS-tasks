angular.module('app')
    .factory('InputErrorsService', function() {
        return {
            shouldShowErrors(input, isFormSubmitted) {
                return (input.$dirty && input.$touched) || isFormSubmitted;
            },
        }
    });
