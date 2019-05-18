$(()=>{
     dropdownOptions = [
        {
            id : 'country',
            isLinked : true,
            linkedTo : "state",
            dataUrl : "state.json"
        },
        {
            id : 'state',
            isLinked : true,
            linkedTo : "village",
            dataUrl : "village.json"
        },
        {
            id : 'village',
            isLinked : false
        }
    ]
})
