const getGoals = ( req, res ) => {
    res.status( 200 ).json( { message: `Get goals` } )
}

const setGoals = ( req, res ) => {
    if ( !req.body.test ) {
        res.status( 400 )
        throw new Error( 'Plase add a text field' );
    }
    res.status( 200 ).json( { message: 'Set goals' } )
}

const updateGoals = ( req, res ) => {
    res.status( 200 ).json( { message: `Update goal goals ${req.params.id}` } )
}

const deleteGoals = ( req, res ) => {
    res.status( 200 ).json( { message: `Delete goal goals ${req.params.id}` } )
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}