(() => {
    document.getElementById('value').value = 100000000;
    
    showProgress = () => {
        document.getElementById('time').innerHTML = '';
        document.getElementById('avg').innerHTML = '';
        const progress = document.getElementById('myprogress');
        progress.style.display = 'block';
    };

    hideProgress = () => {
        const progress = document.getElementById('myprogress');
        progress.style.display = 'none';
    };

    showHiddenContent = () => {
        const hiddenContent = document.getElementById('hidden-content');
        hiddenContent.style.visibility = 'visible';
    };

    displayError = (error) => {
        const errorWrapper = document.getElementById('worker-error');
        errorWrapper.innerText = error.message;
        errorWrapper.style.display = 'block';
    };

    clearError = () => {
        const errorWrapper = document.getElementById('worker-error');
        errorWrapper.innerText = '';
        errorWrapper.style.display = 'none';
    };

    average = () => {
        showProgress();
        try {
            var numbers = document.getElementById('value').value;
        }
        catch (e) {
            var numbers = 100000000;
        }
        const startTime = new Date().getTime();
        const len = numbers;
        let sum = 0;
        let i;

        if (len === 0) {
            return 0;
        }

        for (i = 0; i < len; i++) {
            sum += i;
        }

        let endTime = new Date().getTime();
        document.getElementById('time').innerHTML = `${(endTime - startTime) / 1000} seconds`;
        document.getElementById('avg').innerHTML = `${sum / len}`;
        hideProgress();
    };
})();
