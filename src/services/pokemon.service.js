import api from '../config/axios';
import { delaySimulation } from '../common/helpers';

/**
 * Service class for interacting with Pokemon data.
 */
export class PokemonService {
    constructor() { }

    /**
     * Fetches Pokemon data and handles loading and error states.
     *
     * @param {Function} setData - A function to set the Pokemon data.
     * @param {Function} setLoading - A function to set the loading state.
     * @param {Function} setError - A function to set the error state.
     * @returns {Promise<void>} A Promise that resolves once the data is fetched and states are updated.
     */
    async getPokemons(setData, setLoading, setError) {
        try {
            setLoading(true);
            setError(null);
            // ** NOTE ** This function is invoked only to test loading as we're using a local file.
            await delaySimulation(500);
            // ** NOTE ** Remove one character (/pokemn.json) from the file name to test error handling.
            const { data } = await api.get("/pokemon.json");
            setData(data);
        } catch (error) {
            setError(error.response);
        } finally {
            setLoading(false);
        }
    }
}
