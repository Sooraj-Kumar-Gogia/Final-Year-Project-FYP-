// // import React from 'react'
// // import { View } from "react-native"
// // import Carousel, { Pagination } from 'react-native-snap-carousel'
// // import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
// // import data from './data'

// // const CarouselCards = () => {
// //   const [index, setIndex] = React.useState(0)
// //   const isCarousel = React.useRef(null)

// //   return (
// //     <View>
// //       <Carousel
// //         layout="tinder"
// //         layoutCardOffset={9}
// //         ref={isCarousel}
// //         data={data}
// //         renderItem={CarouselCardItem}
// //         sliderWidth={SLIDER_WIDTH}
// //         itemWidth={ITEM_WIDTH}
// //         onSnapToItem={(index) => setIndex(index)}
// //         useScrollView={true}
// //       />
// //       <Pagination
// //         dotsLength={data.length}
// //         activeDotIndex={index}
// //         carouselRef={isCarousel}
// //         dotStyle={{
// //           width: 10,
// //           height: 10,
// //           borderRadius: 5,
// //           marginHorizontal: 0,
// //           backgroundColor: 'rgba(0, 0, 0, 0.92)'
// //         }}
// //         inactiveDotOpacity={0.4}
// //         inactiveDotScale={0.6}
// //         tappableDots={true}
// //       />
// //     </View>
// //   )
// // }

// // export default CarouselCards



// import { getInputRangeFromIndexes } from 'react-native-snap-carousel';

// // Photo album effect
// function scrollInterpolator1 (index, carouselProps) {
//     const range = [3, 2, 1, 0, -1];
//     const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
//     const outputRange = range;

//     return { inputRange, outputRange };
// }
// function animatedStyles1 (index, animatedValue, carouselProps) {
//     const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
//     const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

//     return {
//         zIndex: carouselProps.data.length - index,
//         opacity: animatedValue.interpolate({
//             inputRange: [2, 3],
//             outputRange: [1, 0],
//             extrapolate: 'clamp'
//         }),
//         transform: [{
//             rotate: animatedValue.interpolate({
//                 inputRange: [-1, 0, 1, 2, 3],
//                 outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
//                 extrapolate: 'clamp'
//             })
//         }, {
//             [translateProp]: animatedValue.interpolate({
//                 inputRange: [-1, 0, 1, 2, 3],
//                 outputRange: [
//                     -sizeRef * 0.5,
//                     0,
//                     -sizeRef, // centered
//                     -sizeRef * 2, // centered
//                     -sizeRef * 3 // centered
//                 ],
//                 extrapolate: 'clamp'
//             })
//         }]
//     };
// }

// // Perspective effect
// function scrollInterpolator2 (index, carouselProps) {
//     const range = [2, 1, 0, -1];
//     const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
//     const outputRange = range;

//     return { inputRange, outputRange };
// }
// function animatedStyles2 (index, animatedValue, carouselProps) {
//     const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
//     const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

//     return {
//         zIndex: carouselProps.data.length - index,
//         opacity: animatedValue.interpolate({
//             inputRange: [-1, 0, 1, 2],
//             outputRange: [0.75, 1, 0.6, 0.4]
//         }),
//         transform: [{
//             rotate: animatedValue.interpolate({
//                 inputRange: [-1, 0, 1, 2],
//                 outputRange: ['0deg', '0deg', '5deg', '8deg'],
//                 extrapolate: 'clamp'
//             })
//         }, {
//             scale: animatedValue.interpolate({
//                 inputRange: [-1, 0, 1, 2],
//                 outputRange: [0.96, 1, 0.85, 0.7]
//             })
//         }, {
//             [translateProp]: animatedValue.interpolate({
//                 inputRange: [-1, 0, 1, 2],
//                 outputRange: [
//                     0,
//                     0,
//                     -sizeRef + 30,
//                     -sizeRef * 2 + 45
//                 ],
//                 extrapolate: 'clamp'
//             })
//         }]
//     };
// }

// // Left/right translate effect
// function scrollInterpolator3 (index, carouselProps) {
//     const range = [2, 1, 0, -1];
//     const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
//     const outputRange = range;

//     return { inputRange, outputRange };
// }
// function animatedStyles3 (index, animatedValue, carouselProps) {
//     const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
//     const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

//     return {
//         zIndex: carouselProps.data.length - index,
//         opacity: animatedValue.interpolate({
//             inputRange: [-1, 0, 1, 2],
//             outputRange: [1, 1, 0.75, 0.5],
//             extrapolate: 'clamp'
//         }),
//         transform: [{
//             [translateProp]: animatedValue.interpolate({
//                 inputRange: [-1, 0, 1, 2],
//                 outputRange: [
//                     0,
//                     0,
//                     -sizeRef * 2,
//                     -sizeRef
//                 ],
//                 extrapolate: 'clamp'
//             })
//         }]
//     };
// }

// // From https://codeburst.io/horizontal-scroll-animations-in-react-native-18dac6e9c720
// function scrollInterpolator4 (index, carouselProps) {
//     const range = [1, 0, -1];
//     const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
//     const outputRange = range;

//     return { inputRange, outputRange };
// }
// function animatedStyles4 (index, animatedValue, carouselProps) {
//     return {
//         zIndex: carouselProps.data.length - index,
//         opacity: animatedValue.interpolate({
//             inputRange: [-1, 0, 1],
//             outputRange: [0.75, 1, 0.75],
//             extrapolate: 'clamp'
//         }),
//         transform: [
//             {
//                 perspective: 1000
//             },
//             {
//                 scale: animatedValue.interpolate({
//                     inputRange: [-1, 0, 1],
//                     outputRange: [0.65, 1, 0.65],
//                     extrapolate: 'clamp'
//                 })
//             },
//             {
//                 rotateX: animatedValue.interpolate({
//                     inputRange: [-1, 0, 1],
//                     outputRange: ['30deg', '0deg', '30deg'],
//                     extrapolate: 'clamp'
//                 })
//             },
//             {
//                 rotateY: animatedValue.interpolate({
//                     inputRange: [-1, 0, 1],
//                     outputRange: ['-30deg', '0deg', '30deg'],
//                     extrapolate: 'clamp'
//                 })
//             }
//         ]
//     };
// }

// // Exports
// export const scrollInterpolators = {
//     scrollInterpolator1,
//     scrollInterpolator2,
//     scrollInterpolator3,
//     scrollInterpolator4
// };

// export const animatedStyles = {
//     animatedStyles1,
//     animatedStyles2,
//     animatedStyles3,
//     animatedStyles4
// };