import {CleaningServices, Print, Restore, Build} from '@mui/icons-material'
import { Box } from '@mui/material'


function CategoryIcon({category}){

    const categoryIcon = category === "Cleaning" ? <CleaningServices/> : category === "Printing" ? <Print />:  category ===  "Recovery" ? <Restore /> : category === "Assembly" ? <Build/> : ""

    return(
        <Box sx={{display: "flex", justifyContent: "space-between",  alignItems: "center", width: "100px"}}>
            <span>{category}</span>
            {categoryIcon}
            

        </Box>
    )
}
export default CategoryIcon