import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  LogBox,
  SectionList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import CategoryIcons from './src/components/categoryLineIcons';
import Sections from './src/components/Sections';
import {strings, metrics} from './src/constants/index';
import {styles} from './src/styles/mainScreenStyles';
import FlatListTemplate from './src/components/flatListTemplate';

const App = () => {
  const [text, setText] = useState('');
  const [modalSearch, setModalSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('grid');
  const sectionListRef = useRef(null);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  scrollToSection = useCallback((index) => {
    sectionListRef.current.scrollToLocation({
      animated: true,
      sectionIndex: index,
      itemIndex: 0,
      viewPosition: 0,
    });
  },[]);
 
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>{strings.emojiPickerBy}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          onChangeText={text => setText(text)}
          value={text}
          style={styles.textInput}
          placeholder={strings.enterText}
        />
        <View style={styles.openModalIcon}>
          <Icon
            name="smile"
            type="feather"
            size={metrics.size30}
            color={showModal ? 'black' : 'gray'}
            onPress={() => setShowModal(prevstate => !prevstate)}
          />
        </View>
      </View>
      {showModal ? (
        <View style={styles.modalContainer}>
          <FlatList
            contentContainerStyle={styles.modalCategoryLine}
            data={CategoryIcons}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => scrollToSection(item.key)}
                    key={item.key}>
                    {item.data}
                  </TouchableOpacity>
                </View>
              );
            }}
            horizontal={true}
          />
          <View style={styles.modalSearch}>
            <TextInput
              onChangeText={text => setModalSearch(text)}
              value={modalSearch}
              placeholder="Search"
            />
          </View>
          <View style={styles.modalIconsList}>
            {selectedIcon == 'grid' ? (
              <SectionList
                ref={sectionListRef}
                initialNumToRender={5000}
                sections={Sections}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                  return null;
                }}
                renderSectionHeader={({section}) => (
                  <>
                    <Text style={styles.categoryTitleText}>
                      {section.title}
                    </Text>
                    <FlatListTemplate
                      type={section.data}
                      setText={setText}
                      name={modalSearch}
                    />
                  </>
                )}
              />
            ) : null}
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default App;

/* {selectedIcon == 'grid' ? (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.categoryTitleText}>Smiley and People</Text>
                <FlatListTemplate
                  type={SmileyEmoticons}
                  setText={setText}
                  name={modalSearch}
                />
                <Text style={styles.categoryTitleText}>Animals and Nature</Text>
                <FlatListTemplate
                  type={Nature}
                  setText={setText}
                  name={modalSearch}
                />
                <Text style={styles.categoryTitleText}>Food and Drinks</Text>
                <FlatListTemplate
                  type={Food}
                  setText={setText}
                  name={modalSearch}
                />
                <Text style={styles.categoryTitleText}>Travel and Places</Text>
                <FlatListTemplate
                  type={Travel}
                  setText={setText}
                  name={modalSearch}
                />
                <Text style={styles.categoryTitleText}>Activities</Text>
                <FlatListTemplate
                  type={Activities}
                  setText={setText}
                  name={modalSearch}
                />
                <Text style={styles.categoryTitleText}>Objects</Text>
                <FlatListTemplate
                  type={Objects}
                  setText={setText}
                  name={modalSearch}
                />
                <Text style={styles.categoryTitleText}>Symbols</Text>
                <FlatListTemplate
                  type={Symbols}
                  setText={setText}
                  name={modalSearch}
                />
                <Text style={styles.categoryTitleText}>Flags</Text>
                <FlatListTemplate
                  type={Flags}
                  setText={setText}
                  name={modalSearch}
                />
              </ScrollView>
            ) : null}
            {selectedIcon == 'smiley' ? (
              <View>
                <Text style={styles.categoryTitleText}>Smiley and People</Text>
                <FlatListTemplate
                  type={SmileyEmoticons}
                  setText={setText}
                  name={modalSearch}
                />
              </View>
            ) : null}
            {selectedIcon == 'nature' ? (
              <View>
                <Text style={styles.categoryTitleText}>Animals and Nature</Text>
                <FlatListTemplate
                  type={Nature}
                  setText={setText}
                  name={modalSearch}
                />
              </View>
            ) : null}
            {selectedIcon == 'food' ? (
              <View>
                <Text style={styles.categoryTitleText}>Food and Drinks</Text>
                <FlatListTemplate
                  type={Food}
                  setText={setText}
                  name={modalSearch}
                />
              </View>
            ) : null}
            {selectedIcon == 'travel' ? (
              <View>
                <Text style={styles.categoryTitleText}>Travel and Places</Text>
                <FlatListTemplate
                  type={Travel}
                  setText={setText}
                  name={modalSearch}
                />
              </View>
            ) : null}
            {selectedIcon == 'activities' ? (
              <View>
                <Text style={styles.categoryTitleText}>Activities</Text>
                <FlatListTemplate
                  type={Activities}
                  setText={setText}
                  name={modalSearch}
                />
              </View>
            ) : null}
            {selectedIcon == 'objects' ? (
              <View>
                <Text style={styles.categoryTitleText}>Objects</Text>
                <FlatListTemplate
                  type={Objects}
                  setText={setText}
                  name={modalSearch}
                />
              </View>
            ) : null}
            {selectedIcon == 'symbols' ? (
              <View>
                <Text style={styles.categoryTitleText}>Symbols</Text>
                <FlatListTemplate
                  type={Symbols}
                  setText={setText}
                  name={modalSearch}
                />
              </View>
            ) : null}
            {selectedIcon == 'flags' ? (
              <View>
                <Text style={styles.categoryTitleText}>Flags</Text>
                <FlatListTemplate
                  type={Flags}
                  setText={setText}
                  name={modalSearch}
                />
              </View>
            ) : null} */
