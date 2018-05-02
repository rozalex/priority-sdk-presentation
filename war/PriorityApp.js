	
    /** 
    * Called when GWT has loaded and API can be used.     
    */
    function JavaLoaded() {}
    
	/**
     * @callback PriInitSuccessCallback
     * @param {Object} allFormsData - Object containing data of all forms as generated by the application generator.
     */
    
    /**
     * @callback PriInitErrorCallback
     * @param {string} errorMessage - Error message.
     */

    /**
     * Initalization
     * @param {string} username - User name.
     * @param {string} pwd - Password.
     * @param {string} computerName - Name of device.
     * @param {string} windowsUserName - Name of windows user (should be empty string).
     * @param {PriInitSuccessCallback} successCallback - called on success.
     * @param {PriInitErrorCallback} errorCallback - called on error.      
     */
    function PriInit(username, pwd, computerName, windowsUserName, successCallback, errorCallback) {}
    
    /**
     * @callback FormStartSuccessCallback
     * @param {Form} form - Form Object.
     * @param {Object} formData - Data of form's first rows (Default is 50).
     */
    
    /**
     * @callback FormStartErrorCallback
     * @param {string} errorMessage - Error message.
     * @param {boolean} isFatal - Is fatal error.
     */
    
    /**
     * Start a form.
     * Should be called once for each form.
     * Form should be started again after fatal error (For example: Netform crashes).
     * @param {string} form - Name of form.
     * @param {FormStartSuccessCallback} successCallback - called on success.
     * @param {FormStartErrorCallback} errorCallback - called on error.
     */
    function FormStart(form, successCallback, errorCallback) {}
    
    /** @class */
    var Message = {
		/** 
    	 * Message text 
    	 * @member {string}
    	 * @instance 
    	 */
    	message: "",
    	
    	/** 
    	 * Message type 
    	 * @member {string} - Type of message (information, ok, error, warning)
    	 * @instance 
    	 */
    	messagetype: ""
    }       
    
    /** @class */
    var ResultObj = {
    	/** 
    	 * Fields data. 
    	 * @member {Object}
    	 * @instance 
    	 */
    	ReplaceText : {},	
    		
    	/** 
    	 * Error message. 
    	 * @member {Message}
    	 * @instance 
    	 */
    	Error : {},
    	
    	/** 
    	 * Warning message. 
    	 * @member {Message}
    	 * @instance 
    	 */    	
    	Warning : {},    	

    	/** 
    	 * Choose Object.
    	 * @member {Object}
    	 * @instance 
    	 */    	
    	Choose : {},
    	
    	/** 
    	 * Search Object.
    	 * @member {Object}
    	 * @instance 
    	 */    	
    	Search : {},
    	
    	/** 
    	 * Contains lines to be deleted. 
    	 * @member {ClearLine}
    	 * @instance 
    	 */
    	ClearLine : {}
    }
    
    /** @class */
    var ClearLine = {
		/** 
    	 * Number of line to be deleted.
    	 * @member {number} - Number of line to be deleted. 
    	 * @instance 
    	 */
    	line: 0,
    	
    	/** 
    	 * Name of form in which the line should be deleted (For example: ORDERITEMS).
    	 * @member {string} - Name of form in which the line should be deleted (For example: ORDERITEMS).
    	 * @instance 
    	 */
    	form: ""
    }
    
    /** @class */
    var Form = {
    		
		/**
	     * @callback SetActiveRowSuccessCallback
	     */
	    
	    /**
	     * @callback SetActiveRowErrorCallback
	     * @param {string} errorMessage - Error message.
	     * @param {boolean} isFatal - Is fatal error.
	     */	
    		
		/**
	     * Goto row.
	     * @param {number} row - Row number.
	     * @param {SetActiveRowSuccessCallback} onSuccess - called on success.
	     * @param {SetActiveRowErrorCallback} onError - called on error.
	     * @instance
	     */
    	SetActiveRow: function(row, onSuccess, onError) {},
    
	    /**
	     * @callback ChooseSuccessCallback
	     * @param {ResultObj} result - Choose Object/Search Object/null
	     * @param {String} type - "Choose" / "Search" / "None".
	     */
	    
	    /**
	     * @callback ChooseErrorCallback
	     * @param {string} errorMessage - Error message.
	     * @param {boolean} isFatal - Is fatal error.
	     */	
    
	    /**
	     * Open choose/search in specified field.     
	     * @param {string} fieldName - Name of field (for example CUSTNAME).
	     * @param {string} fieldVale - Current value in field.
	     * @param {ChooseSuccessCallback} onSuccess - called on success.
	     * @param {ChooseErrorCallback} onError - called on error.    
	     * @instance 
	     */
		Choose: function(fieldName, fieldValue, successCallback, errorCallback) {},     
         
		/**
	     * @callback SearchActionSuccessCallback
	     * @param {ResultObj} result - Search object.
	     */
	    
	    /**
	     * @callback SearchActionErrorCallback
	     * @param {string} errorMessage - Error message.
	     * @param {boolean} isFatal - Is fatal error.
	     */	
    		
		/**
	     * Perform an action in search dialog.
	     * @param {number} action - One of: Next(1),Prev(2),TypeChange(3),TextChange(4),StartChange(5),IgnoreCaseChanged(6)
	     * @param {string} searchText - the text to search for.
	     * @param {SearchActionSuccessCallback} onSuccess - called on success.
	     * @param {SearchActionErrorCallback} onError - called on error.
	     * @instance
	     */
    	SearchAction: function(action, searchText, onSuccess, onError) {},
		
		/**
	     * @callback FieldUpdateSuccessCallback
	     * @param {ResultObj} result - result object.
	     */
	    
	    /**
	     * @callback FieldUpdateErrorCallback
	     * @param {string} errorMessage - Error message.
	     * @param {boolean} isFatal - Is fatal error.
	     */	
    		
		/**
	     * Update value in field.
	     * @param {string} fieldName - Name of field.
	     * @param {string} fieldValue - Current value in field.
	     * @param {FieldUpdateSuccessCallback} onSuccess - called on success.
	     * @param {FieldUpdateErrorCallback} onError - called on error.
	     * @instance
	     */
		FieldUpdate: function(fieldName, fieldValue, onSuccess, onError) {},
    	
    	/**
	     * @callback WarningSuccessCallback
	     * @param {ResultObj} result - result object.
	     */
	    
	    /**
	     * @callback WarningErrorCallback
	     * @param {string} errorMessage - Error message.
	     * @param {boolean} isFatal - Is fatal error.
	     */	
    		
		/**
	     * Approve a warning message.
	     * @param {WarningSuccessCallback} onSuccess - called on success.
	     * @param {WarningErrorCallback} onError - called on error.
	     * @instance
	     */
    	Warning: function(onSuccess, onError) {},					
		
		/**
	     * @callback SaveRowSuccessCallback
	     * @param {ResultObj} result - result object.
	     */
	    
	    /**
	     * @callback SaveRowErrorCallback
	     * @param {string} errorMessage - Error message.
	     * @param {boolean} isFatal - Is fatal error.
	     */	
    		
		/**
	     * Save changes in current active row.
	     * @param {number} backToParentForm - 0: stay in current row after save, 1: For Sub-Form only. go back to parent form and set active row to parent row.
	     * @param {SaveRowSuccessCallback} onSuccess - called on success.
	     * @param {SaveRowErrorCallback} onError - called on error.
	     * @instance
	     */
    	 SaveRow: function(backToParentForm, onSuccess, onError) {},
    	 
    	 /**
 	     * @callback StartSubFormSuccessCallback
 	     * @param {ResultObj} result - result object.
 	     */
 	    
 	    /**
 	     * @callback StartSubFormErrorCallback
 	     * @param {string} errorMessage - Error message.
 	     * @param {boolean} isFatal - Is fatal error.
 	     */	
     		
 		/**
 	     * Starts a Sub-Form and sets the position of the active row to the first row of the Sub-Form.
 	     * @param {string} formName - for example: ORDERITEMS.
 	     * @param {StartSubFormSuccessCallback} onSuccess - called on success.
 	     * @param {StartSubFormErrorCallback} onError - called on error.
 	     * @instance
 	     */
    	 StartSubForm: function(formName, onSuccess, onError) {},
    	 
    	 /**
  	     * @callback GetRowsSuccessCallback
  	     * @param {ResultObj} result - result object.
  	     */
  	    
  	    /**
  	     * @callback GetRowsErrorCallback
  	     * @param {string} errorMessage - Error message.
  	     * @param {boolean} isFatal - Is fatal error.
  	     */	
      		
  		/**
  	     * Returns rows data of current form.
  	     * Note: GetRows without a filter returns rows that have already been retrieved. It doesn't retrieve new rows.
  	     * @param {number} fromRow - The position of the first row to be retrieved.
  	     * @param {GetRowsSuccessCallback} onSuccess - called on success.
  	     * @param {GetRowsErrorCallback} onError - called on error.
  	     * @param {string} filter - Not implemented yet. Must be null.
  	     * @instance
  	     */
    	 GetRows: function(fromRow, onSuccess, onError, filter) {},
    	 
    	 /**
   	     * @callback NewRowSuccessCallback
   	     * @param {ResultObj} result - result object.
   	     */
   	    
   	    /**
   	     * @callback NewRowErrorCallback
   	     * @param {string} errorMessage - Error message.
   	     * @param {boolean} isFatal - Is fatal error.
   	     */	
       		
   		/**
   	     * Opens a new row in the current form. Set the position of the active row to this row.
   	     * @param {NewRowSuccessCallback} onSuccess - called on success.
   	     * @param {NewRowErrorCallback} onError - called on error.
   	     * @instance
   	     */
    	 NewRow: function(onSuccess, onError) {},
    	 
    	 /**
	     * @callback EndCurrentFormSuccessCallback
	     * @param {ResultObj} result - result object.
	     */
	    
	    /**
	     * @callback EndCurrentFormErrorCallback
	     * @param {string} errorMessage - Error message.
	     * @param {boolean} isFatal - Is fatal error.
	     */	
    		
		/**
	     * Exits the current form. On a Sub-Form sets the active row to the parent row.
	     * @param {EndCurrentFormSuccessCallback} onSuccess - called on success.
	     * @param {EndCurrentFormErrorCallback} onError - called on error.
	     * @instance
	     */
    	 EndCurrentForm: function(onSuccess, onError) {},
    	 
    	 /**
 	     * @callback UndoSuccessCallback
 	     * @param {ResultObj} result - result object.
 	     */
 	    
 	    /**
 	     * @callback UndoErrorCallback
 	     * @param {string} errorMessage - Error message.
 	     * @param {boolean} isFatal - Is fatal error.
 	     */	
     		
 		/**
 	     * Undo unsaved changes in current row.
 	     * @param {UndoSuccessCallback} onSuccess - called on success.
 	     * @param {UndoErrorCallback} onError - called on error.
 	     * @instance
 	     */
     	 Undo: function(onSuccess, onError) {},
    	 
    	 /**
  	     * @callback DelRowSuccessCallback
  	     * @param {ResultObj} result - result object.
  	     */
  	    
  	    /**
  	     * @callback DelRowCallback
  	     * @param {string} errorMessage - Error message.
  	     * @param {boolean} isFatal - Is fatal error.
  	     */	
      		
  		/**
  	     * Deletes current row.
  	     * @param {DelRowSuccessCallback} onSuccess - called on success.
  	     * @param {DelRowErrorCallback} onError - called on error.
  	     * @instance
  	     */
      	 DelRow: function(onSuccess, onError) {}    	     	 		
    }
        