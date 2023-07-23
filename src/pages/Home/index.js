import './home.css';
import * as Constants from './contants.js'
import {useState} from "react";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {MuiColorInput} from 'mui-color-input';
import Option from '@mui/joy/Option';
import {
    Button, ButtonGroup,
    Card, CardActions, CardContent, CardHeader,
    FormControl, FormLabel,
    rgbToHex,
} from "@mui/material";
import {Input, Select, selectClasses} from "@mui/joy";

function Home() {

    const [backgroundColor, setBackgroundColor] = useState(`#${Constants.DEFAULTBACKGROUNDCOLOR}`)
    const [textColor, setTextColor] = useState(`#${Constants.DEFAULTTEXTCOLOR}`)

    const handleBgColorChange = (color) => {
        setBackgroundColor(rgbToHex(color))
    }

    const handleTxColorChange = (color) => {
        setTextColor(rgbToHex(color))
    }

    const [height, setHeight] = useState(Constants.DEFAULTDIMENSION);
    const [width, setWidth] = useState(Constants.DEFAULTDIMENSION);

    const handleHeightChange = event => {
        setHeight(event.target.value);
    }

    const handleWidthChange = event => {
        setWidth(event.target.value);
    }

    const [imageText, setImageText] = useState('');

    const handleMessageChange = event => {
        setImageText(event.target.value);
    }
    const [format, setFormat] = useState(Constants.DEFAULTFORMAT);
    const [font, setFont] = useState(Constants.DEFAULTFONT);

    const defaultImage = Constants.DEFAULTIMAGESRC
    const [imageSource, setImageSource] = useState(defaultImage)

    const changeImg = () => {
        const imgUrl = `https://placehold.co/${width}x${height}/${backgroundColor.replace('#', '')}/${textColor.replace('#', '')}/${format}?text=${imageText}&font=${font}`
        setImageSource(imgUrl);
    };
    const setDefaultImg = () => {
        setImageSource(defaultImage);
    };

    return (
        <div>
            <h1 className={"home-title"}> Dimensionamento de Placeholder </h1>
            <div className={"api-image direction-collumn"}>
                <img src={imageSource} alt="test"/>
            </div>
            <Card
                variant="outlined"
                sx={{
                    maxHeight: 'max-content',
                    maxWidth: 'max-content',
                    mx: 'auto',
                    overflow: 'auto',
                }}
            >
                <CardHeader
                    title="Propriedades do Placeholder"
                />
                <CardContent
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                        gap: 1.5,
                    }}>

                    <FormControl sx={{ gridColumn: '1/-1' }}>

                        {/* Dimensão */}
                        <div className={"api-image direction-row"}>
                            <div className={"m-4"}>
                                <FormLabel>Altura</FormLabel>
                                <Input
                                    color="primary"
                                    disabled={false}
                                    InputProps={{ inputProps: { min: 100, max: 1920 } }}
                                    type="number"
                                    defaultValue={600}
                                    value={height}
                                    onChange={handleHeightChange}
                                    size="lg"
                                />
                            </div>
                            <div className="unicode-element">✕</div>
                            <div className={"m-4"}>
                                <FormLabel>Largura</FormLabel>
                                <Input
                                    color="primary"
                                    disabled={false}
                                    type="number"
                                    defaultValue={600}
                                    value={width}
                                    onChange={handleWidthChange}
                                    size="lg"
                                />
                            </div>
                        </div>

                        {/* Cores */}
                        <div className={"api-image direction-row"}>
                            <div className={"m-4 color-input"}>
                                <FormLabel>Plano de fundo</FormLabel>
                                <MuiColorInput value={backgroundColor} format="hex" onChange={handleBgColorChange}/>
                            </div>
                            <div className={"m-4 color-input"}>
                                <FormLabel>Cor do texto</FormLabel>
                                <MuiColorInput value={textColor} format="hex" onChange={handleTxColorChange}/>
                            </div>
                        </div>

                        {/* Texto */}
                        <div className={"api-image direction-collumn"}>
                            <FormLabel>Texto da imagem</FormLabel>
                            <Input fullWidth placeholder="Texto de exemplo" value={imageText ?? ''} onChange={handleMessageChange}/>
                        </div>

                        {/* Formato e fonte */}
                        <div className={"api-image direction-row"}>
                            <div className={"m-4"}>
                                <FormLabel>Formato da imagem</FormLabel>
                                <Select
                                    color="primary"
                                    placeholder="Escolha um formato…"
                                    onChange={(e, newValue) => setFormat(newValue)}
                                    indicator={<KeyboardArrowDown/>}
                                    sx={{
                                        width: 240, [`& .${selectClasses.indicator}`]: {
                                            transition: '0.2s', [`&.${selectClasses.expanded}`]: {
                                                transform: 'rotate(-180deg)',
                                            },
                                        },
                                    }}>

                                    {Object.entries(Constants.DATAFORMAT).map(([name, value], index) => (
                                        <Option value={value.value}>{value.name}</Option>
                                    ))}
                                </Select>
                            </div>
                            <div className={"m-4"}>
                                <FormLabel>Fonte do texto da imagem</FormLabel>
                                <Select
                                    color="primary"
                                    placeholder="Escolha uma fonte…"
                                    onChange={(e, newValue) => setFont(newValue)}
                                    indicator={<KeyboardArrowDown/>}
                                    sx={{
                                        width: 240, [`& .${selectClasses.indicator}`]: {
                                            transition: '0.2s', [`&.${selectClasses.expanded}`]: {
                                                transform: 'rotate(-180deg)',
                                            },
                                        },
                                    }}>
                                    {Object.entries(Constants.DATAFONT).map(([name, value], index) => (
                                        <Option value={value.value}>{value.name}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                    </FormControl>
                    <CardActions sx={{ gridColumn: '1/-1' }} className={"justify-center"}>
                        <ButtonGroup aria-label="outlined primary button group m-4">
                            <Button onClick={changeImg}>Mudar Imagem</Button>
                            <Button onClick={setDefaultImg}>Limpar filtros</Button>
                        </ButtonGroup>
                    </CardActions>
                </CardContent>
            </Card>
        </div>)
}

export default Home;
