// eslint-disable-next-line
import { isObject, extend } from './utils';
import { paramsList } from './params-list';
import Swiper from 'swiper/core';
const ɵ0 = (key) => key.replace(/_/, '');
export const allowedParams = paramsList.map(ɵ0);
export function getParams(obj = {}) {
    const params = {
        on: {},
    };
    const passedParams = {};
    extend(params, Swiper.defaults);
    extend(params, Swiper.extendedDefaults);
    params._emitClasses = true;
    const rest = {};
    Object.keys(obj).forEach((key) => {
        const _key = key.replace(/^_/, '');
        if (typeof obj[_key] === 'undefined')
            return;
        if (allowedParams.indexOf(_key) >= 0) {
            if (isObject(obj[_key])) {
                params[_key] = {};
                passedParams[_key] = {};
                extend(params[_key], obj[_key]);
                extend(passedParams[_key], obj[_key]);
            }
            else {
                params[_key] = obj[_key];
                passedParams[_key] = obj[_key];
            }
        }
        else {
            rest[_key] = obj[_key];
        }
    });
    return { params, passedParams, rest };
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3NyYy91dGlscy9nZXQtcGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztXQUVXLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFBekUsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxHQUFHLElBQStCLENBQUM7QUFDM0UsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtJQUNoQyxNQUFNLE1BQU0sR0FBa0I7UUFDNUIsRUFBRSxFQUFFLEVBQUU7S0FDUCxDQUFDO0lBQ0YsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFFM0IsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDL0IsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxXQUFXO1lBQUUsT0FBTztRQUM3QyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BDLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5pbXBvcnQgeyBpc09iamVjdCwgZXh0ZW5kIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IHBhcmFtc0xpc3QgfSBmcm9tICcuL3BhcmFtcy1saXN0JztcclxuaW1wb3J0IHsgU3dpcGVyT3B0aW9ucyB9IGZyb20gJ3N3aXBlci90eXBlcyc7XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFsbG93ZWRQYXJhbXMgPSBwYXJhbXNMaXN0Lm1hcCgoa2V5KSA9PiBrZXkucmVwbGFjZSgvXy8sICcnKSk7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbXMob2JqID0ge30pIHtcclxuICBjb25zdCBwYXJhbXM6IFN3aXBlck9wdGlvbnMgPSB7XHJcbiAgICBvbjoge30sXHJcbiAgfTtcclxuICBjb25zdCBwYXNzZWRQYXJhbXMgPSB7fTtcclxuICBleHRlbmQocGFyYW1zLCBTd2lwZXIuZGVmYXVsdHMpO1xyXG4gIGV4dGVuZChwYXJhbXMsIFN3aXBlci5leHRlbmRlZERlZmF1bHRzKTtcclxuICBwYXJhbXMuX2VtaXRDbGFzc2VzID0gdHJ1ZTtcclxuXHJcbiAgY29uc3QgcmVzdCA9IHt9O1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBjb25zdCBfa2V5ID0ga2V5LnJlcGxhY2UoL15fLywgJycpO1xyXG4gICAgaWYgKHR5cGVvZiBvYmpbX2tleV0gPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcbiAgICBpZiAoYWxsb3dlZFBhcmFtcy5pbmRleE9mKF9rZXkpID49IDApIHtcclxuICAgICAgaWYgKGlzT2JqZWN0KG9ialtfa2V5XSkpIHtcclxuICAgICAgICBwYXJhbXNbX2tleV0gPSB7fTtcclxuICAgICAgICBwYXNzZWRQYXJhbXNbX2tleV0gPSB7fTtcclxuICAgICAgICBleHRlbmQocGFyYW1zW19rZXldLCBvYmpbX2tleV0pO1xyXG4gICAgICAgIGV4dGVuZChwYXNzZWRQYXJhbXNbX2tleV0sIG9ialtfa2V5XSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyYW1zW19rZXldID0gb2JqW19rZXldO1xyXG4gICAgICAgIHBhc3NlZFBhcmFtc1tfa2V5XSA9IG9ialtfa2V5XTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdFtfa2V5XSA9IG9ialtfa2V5XTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgcGFyYW1zLCBwYXNzZWRQYXJhbXMsIHJlc3QgfTtcclxufVxyXG4iXX0=