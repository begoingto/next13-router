function ToastMessage({message,type,id,handleRemove}) {
    type = type || 'success'
    const types = [
        {
            type: 'success',
            icon: 'bi bi-check2-circle',
            color: 'green',
        },
        {
            type: 'error',
            icon: 'bi bi-exclamation-circle',
            color: 'red'
        }
    ]
    const result = types.find(item => item.type===type)

    return (
        <div id="toast-success"
             className="flex items-center w-full max-w-md p-4 mb-4 text-gray-100 rounded-lg shadow dark:text-gray-400 bg-gray-800"
             role="alert">
            <div
                className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${result.color}-700`}>
                <b><i className={result.icon}></i></b>
                <span className="sr-only">Check icon</span>
            </div>
            <div className={`ml-3 text-sm font-normal text-${result.color}-700`}>{message ? message : "Item moved successfully."}</div>
            <button type="button"
                    onClick={handleRemove}
                    className="ml-auto -mx-1.5 -my-1.5 text-red-300 hover:text-red-800 rounded-lg focus:ring-2 focus:ring-red-300 p-1.5 inline-flex h-8 w-8 dark:text-gray-500 dark:bg-gray-800"
                    data-dismiss-target="#toast-success" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                </svg>
            </button>
        </div>
    );
}

export default ToastMessage;