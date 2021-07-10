import { environment } from '../../environments/environment';
import { SortMovieType } from '../constants/movie.const';
import service from '.';

const BASE_URL = environment.BaseURL + '/api/movies';

export function getPagingListMovie(page = 1, size = 10, sort = SortMovieType.Name) {
	return service(BASE_URL, {
		method: 'GET',
		params: { page, size, sort },
	});
}

export function createMovie(payload) {
	return service(BASE_URL, {
		method: 'POST',
		data: payload,
	});
}

export function deleteMovie(movieId) {
	return service(BASE_URL, {
		url: '/' + movieId,
		method: 'DELETE',
	});
}
