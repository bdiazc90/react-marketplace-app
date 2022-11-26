import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Button} from '@mui/material';

function ListPriceActions(props) {
    const { product } = props;
    const { removeCart } = useContext(CartContext);
    return (
        <>
            $ {product.price}
            {' '}
            <Button color="error" onClick={() => removeCart(product.id)}>x</Button>
        </>
    );
}


function ListProducts(props) {
    const { list, user } = props;

	
    return (
        <List sx={{ mx: "auto", width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
            {list.length > 0 &&
                        list.map((product, index) => (
                            <>
                            <ListItem alignItems="flex-start" key={index} secondaryAction={<ListPriceActions product={product} />}>
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src={product.image_url} />
                            </ListItemAvatar>
                            <ListItemText
                              primary={product.name}
                              secondary={
                                <>
                                  <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    Seller: {product.user_name}
                                  </Typography>
                                </>
                              }
                              
                            />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                            </>
                        ))}
        </List>
    );
}

export default ListProducts;