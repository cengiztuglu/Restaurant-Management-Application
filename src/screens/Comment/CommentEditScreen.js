import React, { useLayoutEffect,useState } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, StyleSheet, TouchableOpacity,TextInput } from "react-native";
import styles from "./styles";
import { menuitemedit } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

export default Comments = (props) => {
  const data = [
    {
      id: 1,
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Frank Odalthh',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 2,
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      name: 'John DoeLink',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 3,
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      name: 'March SoulLaComa',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 4,
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      name: 'Finn DoRemiFaso',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 5,
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      name: 'Maria More More',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 6,
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      name: 'Clark June Boom!',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 7,
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      name: 'The googler',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
  ]

  const [comments, setComment] = useState(data)

  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.containeritem}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );


  return (

  <View style={styles.containerTop}>
        
    <View style={styles.form}>
      <Text style={styles.label}>Yorumunuz :</Text>
        <TextInput
          style={styles.input}
          placeholder="Yorumunuz"
          value={comments}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit({itemName, itemDesc, itemPrice, itemCategory})}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
    </View>

    <FlatList
      style={styles.root}
      data={comments}
      extraData={this.state}
      ItemSeparatorComponent={() => {
        return <View style={stylesComment.separator} />
      }}
      keyExtractor={item => {
        return item.id
      }}
      renderItem={item => {
        const Notification = item.item
        return (

        <View style={stylesComment.container}>
          <TouchableOpacity onPress={() => {}}>
            <Image style={stylesComment.image} source={{ uri: Notification.image }} />
          </TouchableOpacity>
          <View style={stylesComment.content}>
            <View style={stylesComment.contentHeader}>
              <Text style={stylesComment.name}>{Notification.name}</Text>
              <Text style={stylesComment.time}>9:58 am</Text>
            </View>
              <Text rkType="primary3 mediumLine">{Notification.comment}</Text>
            </View>
          </View>
       
        )
      }}
    />
  </View>
  )
}

const stylesComment = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    marginTop: 300,
  },
  containerTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
    fontSize: 15,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#c10e18',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems:'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    alignItems:'center',
  },
})

                                            



