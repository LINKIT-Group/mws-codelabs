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

    if (window.Worker) {
        const myWorker = new Worker('./scripts/worker.js');

        myWorker.onmessage = (e) => {
            document.getElementById('time').innerHTML = `${e.data.time} seconds`;
            document.getElementById('avg').innerHTML = `${e.data.average}`;
            hideProgress();
            clearError();
        };

        myWorker.onerror = (err) => {
            hideProgress();
            displayError(err);
        };

        average = () => {
            showProgress();
            try {
                var numbers = document.getElementById('value').value;
            }
            catch (e) {
                var numbers = 100000000;
            }
            myWorker.postMessage(numbers);
        };
    }
})();
