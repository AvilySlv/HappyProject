import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/createOrphanage/OrphanageData';
import SelectMapPosition from './pages/createOrphanage/SelectMapPosition'

import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#F2F3F5'
                }
            }}>
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap}
                />
                
                <Screen 
                    name="OrphanageDetails"     
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => {
                            return <Header showCancel={false} title="Detalhes" />;
                        }
                    }}
                />
                
                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => {
                            return <Header title="Detalhes" />;
                        }
                    }}
                />
                
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => {
                            return <Header title="Detalhes" />;
                        }
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}