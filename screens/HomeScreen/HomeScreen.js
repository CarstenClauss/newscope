import React, { useContext, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { HomeScreenStylesLight, HomeScreenStylesDark } from './HomeScreen.styles';
import { NewsCardComponent } from '../../components/NewsCardComponent/NewsCard.component';
import { NewsContext } from '../../Data/newsContext';
import { Topnews } from '../../Models/TopnewsModel';
import { SettingsContext } from '../../Data/settingsContext';
import { Colors } from '../../constants/colors';

export const HomeScreen = (props) => {
    
    // Global states
    const { theme, push, country, category } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;
    const [currentCategory, setCurrentCategory] = category;

    const { topNews, favoriteNews } = useContext(NewsContext);
    const [newsData, setNewsData] = topNews;
    const [favoriteData, setFavoriteData] = favoriteNews;

    // called if newsData changes
    useEffect(() => {
        //logging the id's to the console
        console.log('news status:', newsData.liveTopnews.status);
        console.log('totalresults:', newsData.liveTopnews.totalResults, '\n');
        // newsData.liveTopnews.articles.map((article) => {
        //     console.log('Article ID:', article.source.id);
        // });
    }, [newsData]);

    // Fetch news if country or category changes
    useEffect(() => {

        fetchNews();
    }, [currentCountry]);

    useEffect(() => {

        fetchNews();
    }, [currentCategory]);

    // Api call using country and category state
    function fetchNews() {
        const xhr = new XMLHttpRequest();
        xhr.open(
            'GET',
            'http://newsapi.org/v2/top-headlines?country=' + currentCountry + '&category=' + currentCategory + '&pageSize=100&apiKey=f4635151d8bf47af94cec511748e296e',
            true
        );
        xhr.onload = () => {
            setNewsData((newsData) => ({
                liveTopnews: new Topnews(JSON.parse(xhr.response)),
            }));
        };
        xhr.send();
    }

    // Return FlatList with fetched news as NewsCards
    return (
        <View style={currentTheme === 'light' ? HomeScreenStylesLight.viewContainer : HomeScreenStylesDark.viewContainer}>
            <FlatList
                style={
                    currentTheme === 'light' ? { backgroundColor: Colors.light.background } : { backgroundColor: Colors.dark.background }
                }
                refreshing={false}
                onRefresh={() => {
                    fetchNews();
                }}
                keyExtractor={(article) => article.source.id}
                data={newsData.liveTopnews.articles}
                renderItem={({ item }) => (
                    <NewsCardComponent
                        category={item.source.name}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.urlToImage}
                        url={item.url}
                        content={item.content}
                        publishedAt={item.publishedAt}
                        author={item.author}
                        screen='Home'
                        id='0'
                    />
                )}
            />
        </View>
    );
};
