import { useEffect, useState } from "react";
import { AdHeading, AdSearchBtn, AdvancedSearch, FilterBody, LabelRating, LessAdvanced, PriceInput, PriceRange, RangeStyle, RatingDiv, RatingFlex, RatingHeading, Ratings, SearchInput } from "../Styles/Filter.style";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";

export default function Filter(props: any) {
    const [search, setInputSearch] = useState("");
    const [adSearch, setAdSearch] = useState(false)
    const [maxPrice, setMaxPrice] = useState(1500)
    const [minPrice, setMinPrice] = useState(0)
    const [rating, setRating] = useState("1")

    useEffect(() => {
        const delay = setTimeout(() => {
            props?.setCopyData(props.copydata.filter((e: any) => {
                const normalizedString = e.name.toLowerCase().replace(/\s/g, '');
                const normalizedSubstring = search.toLowerCase().replace(/\s/g, '');
                return normalizedString.includes(normalizedSubstring);
            }))
        }, 500)
        return () => clearTimeout(delay)
    }, [search])
    const handleInputChange = (e: any) => {
        setInputSearch(e.target.value)

    }
    const handleFilter = () => {
        props?.setCopyData(props.copydata.filter((e: any) => {
            return parseInt(e.price) <= maxPrice && parseInt(e.price) >= minPrice && parseInt(e.rating) >= parseInt(rating)
        }))
    }
    return (
        <>

            <FilterBody>
                <LessAdvanced>

                    <SearchInput placeholder="Search..." type="search" onChange={handleInputChange}></SearchInput>
                    <AdSearchBtn onClick={() => setAdSearch(true)}><SearchIcon />Advanced Filters </AdSearchBtn>


                </LessAdvanced>


                {
                    adSearch ? <AdvancedSearch >
                        <AdHeading>
                            Advanced Search
                        </AdHeading>
                        <RangeStyle style={{ display: "flex", justifyContent: "space-between" }}>

                            <PriceRange>
                                Min Price : <PriceInput type="range" min={0} max={1500} value={minPrice} onChange={(e: any) => {
                                    if (maxPrice < parseInt(e.target.value)) return;
                                    setMinPrice(e.target.value)
                                }} ></PriceInput>
                                <LabelRating>{minPrice} Rs</LabelRating>
                            </PriceRange>
                            <PriceRange>
                                Max Price : <PriceInput type="range" min={0} max={1500} value={maxPrice} onChange={(e: any) => {
                                    if (parseInt(e.target.value) < minPrice) return;
                                    setMaxPrice(e.target.value)
                                }} ></PriceInput>
                                <LabelRating>{maxPrice} Rs</LabelRating>
                            </PriceRange>
                        </RangeStyle>

                        <RatingDiv>
                            <RatingHeading>Rating :</RatingHeading>
                            <RatingFlex>
                                <p style={{ display: "flex", alignItems: "center" }}>
                                    <Ratings type="radio" name="rating" value="5" checked={rating === '5'}
                                        onChange={(e: any) => setRating(e?.target?.value)}></Ratings><LabelRating>5 Star</LabelRating></p>
                                <p style={{ display: "flex", alignItems: "center" }}>
                                    <Ratings type="radio" name="rating" value="4" checked={rating === '4'}
                                        onChange={(e: any) => setRating(e?.target?.value)}></Ratings><LabelRating>4 Star & Above</LabelRating></p>
                                <p style={{ display: "flex", alignItems: "center" }}>
                                    <Ratings type="radio" name="rating" value="3" checked={rating === '3'}
                                        onChange={(e: any) => setRating(e?.target?.value)}></Ratings><LabelRating>3 Star & Above</LabelRating></p>
                                <p style={{ display: "flex", alignItems: "center" }}>
                                    <Ratings type="radio" name="rating" value="2" checked={rating === '2'}
                                        onChange={(e: any) => setRating(e?.target?.value)}></Ratings><LabelRating>2 Star & Above</LabelRating></p>
                                <p style={{ display: "flex", alignItems: "center" }}>
                                    <Ratings type="radio" name="rating" value="1" checked={rating === '1'}
                                        onChange={(e: any) => setRating(e?.target?.value)}></Ratings><LabelRating>1 Star & Above</LabelRating></p>
                            </RatingFlex>

                        </RatingDiv>

                        <Button variant="contained" onClick={handleFilter}>Filter</Button> <Button variant="contained" onClick={() => {
                            setAdSearch(false)
                        }}>Close</Button>
                    </AdvancedSearch> : <></>
                }

            </FilterBody >

        </>
    )
}
