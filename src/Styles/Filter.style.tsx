import { styled } from "@mui/material";

export const FilterBody = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    margin: "30px 0px",
    justifyContent: "center",
    padding: "0px",


}))
export const SearchInput = styled("input")(() => ({
    width: "440px",
    height: "40px",
    borderRadius: "10px",
    border: "1px solid ",
    "@media(max-width:468px)": {
        width: "300px",
    },

}))

export const AdSearchBtn = styled("span")(() => ({
    fontSize: "15px",
    margin: "8px",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    color: "#0072E5",
    fontWeight: "700",
    cursor: "pointer"
}))
export const LessAdvanced = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    margin: "50px 0px 20px 0px",
    padding: "0px",
    alignItems: "center",
    justifyContent: "center"
}))

export const AdvancedSearch = styled("div")(() => ({
    margin: "0px 130px",
    padding: "30px",
    boxShadow: "0px 0px 4px black",
    "@media(max-width:1212px)": {
        margin: "0px 80px",
    },
    "@media(max-width:1051px)": {
        // width: "600px",
    },
    "@media(max-width:812px)": {
        margin: "0px 10px",
    },

}))

export const RangeStyle = styled("div")(() => ({
    "@media(max-width:396px)": {
        flexDirection: "column",
    },
}))
export const RatingFlex = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    "@media(max-width:854px)": {
        flexDirection: "column",
    },
}))
export const AdHeading = styled("h2")(() => ({
    fontSize: "20px",
    fontWeight: "600",
    color: "#0072E5"
}))
export const PriceRange = styled("div")(() => ({
    fontSize: "16px",
    fontWeight: "600"
}))
export const PriceInput = styled("input")(() => ({
    display: "flex",
    alignItems: "center"
}))
export const RatingDiv = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    margin: "20px 0px"
}))
export const RatingHeading = styled("div")(() => ({ fontSize: "18px", margin: "10px 0px", fontWeight: "600" }))
export const Ratings = styled("input")(() => ({ fontSize: "16px", margin: "0px 10px", }))
export const LabelRating = styled("label")(() => ({ fontSize: "16px", fontWeight: "400" }))